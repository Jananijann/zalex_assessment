import {useState, useCallback, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../app/store';
import {submitRequest} from '../redux/slice';
import {
  validateForm,
  isFormValid,
  validateAddressTo,
  validatePurpose,
  validateIssuedOn,
  validateEmployeeId,
} from '../utils/validation';
import {ValidationErrors} from '../../certificate/services/types';

export function useRequestForm() {
  const dispatch = useDispatch<AppDispatch>();

  const [addressTo, setAddressTo] = useState('');
  const [purpose, setPurpose] = useState('');
  const [issuedOn, setIssuedOn] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentErrors = useMemo(
    () =>
      validateForm({
        address_to: addressTo,
        purpose,
        issued_on: issuedOn,
        employee_id: employeeId,
      }),
    [addressTo, purpose, issuedOn, employeeId],
  );

  const formValid = isFormValid(currentErrors);

  const handleBlur = useCallback(
    (field: keyof ValidationErrors) => {
      setTouched(prev => ({...prev, [field]: true}));
      const validators: Record<keyof ValidationErrors, (v: string) => string | undefined> = {
        address_to: validateAddressTo,
        purpose: validatePurpose,
        issued_on: validateIssuedOn,
        employee_id: validateEmployeeId,
      };
      const error = validators[field](
        field === 'address_to'
          ? addressTo
          : field === 'purpose'
          ? purpose
          : field === 'issued_on'
          ? issuedOn
          : employeeId,
      );
      setErrors(prev => {
        const next = {...prev};
        if (error) {
          next[field] = error;
        } else {
          delete next[field];
        }
        return next;
      });
    },
    [addressTo, purpose, issuedOn, employeeId],
  );

  const handleChangeAddressTo = useCallback(
    (value: string) => {
      setAddressTo(value);
      if (touched.address_to) {
        const error = validateAddressTo(value);
        setErrors(prev => {
          const next = {...prev};
          if (error) {
            next.address_to = error;
          } else {
            delete next.address_to;
          }
          return next;
        });
      }
    },
    [touched.address_to],
  );

  const handleChangePurpose = useCallback(
    (value: string) => {
      setPurpose(value);
      if (touched.purpose) {
        const error = validatePurpose(value);
        setErrors(prev => {
          const next = {...prev};
          if (error) {
            next.purpose = error;
          } else {
            delete next.purpose;
          }
          return next;
        });
      }
    },
    [touched.purpose],
  );

  const handleChangeIssuedOn = useCallback(
    (value: string) => {
      setIssuedOn(value);
      if (touched.issued_on) {
        const error = validateIssuedOn(value);
        setErrors(prev => {
          const next = {...prev};
          if (error) {
            next.issued_on = error;
          } else {
            delete next.issued_on;
          }
          return next;
        });
      }
    },
    [touched.issued_on],
  );

  const handleChangeEmployeeId = useCallback(
    (value: string) => {
      setEmployeeId(value);
      if (touched.employee_id) {
        const error = validateEmployeeId(value);
        setErrors(prev => {
          const next = {...prev};
          if (error) {
            next.employee_id = error;
          } else {
            delete next.employee_id;
          }
          return next;
        });
      }
    },
    [touched.employee_id],
  );

  const handleSubmit = useCallback(async (): Promise<boolean> => {
    setTouched({
      address_to: true,
      purpose: true,
      issued_on: true,
      employee_id: true,
    });
    const allErrors = validateForm({
      address_to: addressTo,
      purpose,
      issued_on: issuedOn,
      employee_id: employeeId,
    });
    setErrors(allErrors);
    if (!isFormValid(allErrors)) {
      return false;
    }
    setSubmitting(true);
    try {
      await dispatch(
        submitRequest({
          address_to: addressTo,
          purpose,
          issued_on: issuedOn,
          employee_id: employeeId,
        }),
      ).unwrap();
      setSubmitted(true);
      return true;
    } catch {
      return false;
    } finally {
      setSubmitting(false);
    }
  }, [dispatch, addressTo, purpose, issuedOn, employeeId]);

  return {
    addressTo,
    purpose,
    issuedOn,
    employeeId,
    errors,
    touched,
    formValid,
    submitting,
    submitted,
    handleChangeAddressTo,
    handleChangePurpose,
    handleChangeIssuedOn,
    handleChangeEmployeeId,
    handleBlur,
    handleSubmit,
  };
}
