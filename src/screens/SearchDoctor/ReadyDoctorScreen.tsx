import React, {useCallback} from 'react';
import {View, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {COLORS} from 'theme/theme';
import {IDoctor, doctorLists} from 'models/doctor.model';
import {useTranslation} from 'react-i18next';
import DoctorCard from 'components/basecomponents/card/DoctorCard';

interface IProps {}

const ReadyDoctorScreen: React.FC<IProps> = () => {
  const {t} = useTranslation();

  const _renderItem = useCallback<ListRenderItem<IDoctor>>(
    ({item}) => {
      return <DoctorCard item={item} onPress={() => {}} />;
    },
    [t],
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
        data={doctorLists}
        renderItem={_renderItem}
        ListFooterComponent={<View style={styles.footerContainer} />}
      />
    </View>
  );
};

export default ReadyDoctorScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
  gap: {margin: 10},
  flatListContainer: {padding: 20},
  footerContainer: {height: 100},
});
