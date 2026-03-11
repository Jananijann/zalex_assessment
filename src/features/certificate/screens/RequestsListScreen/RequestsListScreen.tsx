import React, {useCallback, useState} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {Text, FAB, IconButton} from 'react-native-paper';
import {CertificateRequest} from '../../../../types';
import {STRINGS} from '../../../../shared/constants/strings';
import {COLORS} from '../../../../shared/styles/colors';
import {useRequests} from '../../hooks/useRequests';
import {useRequestFilters} from '../../hooks/useRequestFilters';
import StatusSummaryCard from '../../components/StatusSummaryCard';
import SkeletonCard from '../../components/SkeletonCard';
import EmptyState from '../../components/EmptyState';
import ErrorState from '../../components/ErrorState';
import RequestCard from '../../components/RequestCard';
import SearchBar from '../../components/SearchBar';
import FilterBar from '../../components/FilterBar';
import SortControls from '../../components/SortControls';
import {styles} from './styles';

interface Props {
  navigation: any;
}

const RequestsListScreen: React.FC<Props> = ({navigation}) => {
  const {requests, loading, error, refresh, refreshing, onRefresh} = useRequests();
  const filters = useRequestFilters(requests);
  const [activeStatus, setActiveStatus] = useState<string | null>(null);

  const handleStatusPress = useCallback(
    (status: string | null) => {
      setActiveStatus(status);
      if (status) {
        filters.handleApplyFilters({status});
      } else {
        filters.handleClearFilters();
      }
    },
    [filters],
  );

  const handlePressRequest = useCallback(
    (request: CertificateRequest) => {
      navigation.navigate('RequestDetails', {request});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: CertificateRequest}) => (
      <RequestCard request={item} onPress={() => handlePressRequest(item)} />
    ),
    [handlePressRequest],
  );

  if (loading && requests.length === 0) {
    return (
      <View style={styles.container}>
        <StatusSummaryCard requests={[]} activeStatus={null} onStatusPress={() => {}} />
        {[1, 2, 3].map(i => (
          <SkeletonCard key={i} />
        ))}
      </View>
    );
  }

  if (error && requests.length === 0) {
    return (
      <View style={styles.container}>
        <ErrorState message={error} onRetry={refresh} />
      </View>
    );
  }

  if (requests.length === 0) {
    return (
      <View style={styles.container}>
        <EmptyState onCreatePress={() => navigation.navigate('RequestCertificate')} />
      </View>
    );
  }

  const listHeader = (
    <>
      <StatusSummaryCard
        requests={requests}
        activeStatus={activeStatus}
        onStatusPress={handleStatusPress}
      />
      <SearchBar value={filters.searchQuery} onChangeText={filters.setSearchQuery} />
      <View style={styles.toolbar}>
        <IconButton
          icon={filters.showFilters ? 'filter-off' : 'filter'}
          onPress={filters.toggleFilters}
          iconColor={COLORS.primary}
        />
      </View>
      {filters.showFilters && (
        <FilterBar
          onApplyFilters={filters.handleApplyFilters}
          onClearFilters={filters.handleClearFilters}
        />
      )}
      <SortControls
        currentField={filters.sortField}
        currentOrder={filters.sortOrder}
        onSort={filters.handleSort}
      />
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filters.processedRequests}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.reference_no || index.toString()}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={
          <View style={styles.emptyFiltered}>
            <Text style={styles.emptyText}>{STRINGS.messageNoRequests}</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }
      />
      <FAB
        icon="plus"
        style={styles.fab}
        color={COLORS.white}
        onPress={() => navigation.navigate('RequestCertificate')}
      />
    </View>
  );
};

export default RequestsListScreen;
