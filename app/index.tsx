import { StyleSheet, FlatList } from 'react-native';
import apodsJson from '../src/data/apods.json';
import ApodListItem from '../src/components/ApodListItem';
import { useState } from 'react';
import FullScreenImage from '../src/components/FullScreenImage';

export default function Page() {
  const [apods, setApods] = useState(apodsJson);
  const [activePicture, setActivePicture] = useState<string>(null);

  return (
    <>
      <FlatList
        data={apods}
        renderItem={({ item }) => (
          <ApodListItem
            apod={item}
            onImagePress={() => setActivePicture(item.url)}
          />
        )}
      />
      <FullScreenImage
        url={activePicture}
        onClose={() => setActivePicture(null)}
      />
    </>
  );
}

const styles = StyleSheet.create({});
