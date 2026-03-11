import React, {useCallback, useState} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {Text, FAB} from 'react-native-paper';
import {NavProps} from '@shared/types/common';
import {CertificateRequest} from '../../services/types';
import {STRINGS} from '../../../../shared/constants/strings';
import {useColors} from '../../../../shared/theme';
import {useRequests} from '../../hooks/useRequests';
import {useRequestFilters} from '../../hooks/useRequestFilters';
import StatusSummaryCard from '../../components/StatusSummaryCard';
import SkeletonCard from '../../components/SkeletonCard';
import EmptyState from '../../components/EmptyState';
import ErrorState from '../../../../shared/components/ErrorState';
import RequestCard from '../../components/RequestCard';
import FilterBar from '../../components/FilterBar';
import {styles} from './styles';

const RequestsListScreen: React.FC<NavProps> = ({navigation}) => {
  const colors = useColors();
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

  const containerStyle = [styles.container, {backgroundColor: colors.background}];

  if (loading && requests.length === 0) {
    return (
      <View style={containerStyle}>
        <StatusSummaryCard requests={[]} activeStatus={null} onStatusPress={() => {}} />
        {[1, 2, 3].map(i => (
          <SkeletonCard key={i} />
        ))}
      </View>
    );
  }

  if (error && requests.length === 0) {
    return (
      <View style={containerStyle}>
        <ErrorState message={error} onRetry={refresh} />
      </View>
    );
  }

  if (requests.length === 0) {
    return (
      <View style={containerStyle}>
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
      <FilterBar
        searchQuery={filters.searchQuery}
        onSearchChange={filters.setSearchQuery}
        onApplyFilters={filters.handleApplyFilters}
        onClearFilters={filters.handleClearFilters}
        sortField={filters.sortField}
        sortOrder={filters.sortOrder}
        onSort={filters.handleSort}
      />
    </>
  );

  return (
    <View style={containerStyle}>
      <FlatList
        data={filters.processedRequests}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.reference_no || index.toString()}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={
          <View style={styles.emptyFiltered}>
            <Text style={[styles.emptyText, {color: colors.textSecondary}]}>
              {STRINGS.messageNoRequests}
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      />
      <FAB
        icon="plus"
        style={[styles.fab, {backgroundColor: colors.fabBackground}]}
        color={colors.white}
        onPress={() => navigation.navigate('RequestCertificate')}
        accessibilityLabel="Create new request"
      />
    </View>
  );
};

export default RequestsListScreen;
