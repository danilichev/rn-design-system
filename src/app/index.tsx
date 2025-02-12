import { pascalCase } from "change-case";
import { useNavigation } from "expo-router";
import { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { StackScreenOptions } from "src/components/navigation/StackScreenOptions";
import { Text } from "src/components/Text";
import { Touchable } from "src/components/Touchable";
import { RootStackParamList } from "src/types/navigation";
import { prop } from "src/utils/common";

const componentsRoutes: (keyof RootStackParamList)[] = ["components/button"];

const components = componentsRoutes.map((route) => ({
  label: pascalCase(route.split("/").slice(-1)[0]),
  value: route,
}));

export default function IndexScreen() {
  const { navigate } = useNavigation();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Option<keyof RootStackParamList>>) => (
      <Touchable
        borderBottomColor="silver"
        borderBottomWidth={1}
        onPress={() => {
          navigate(item.value);
        }}
        padding="md"
      >
        <Text fontSize={16} fontWeight="bold">
          {item.label}
        </Text>
      </Touchable>
    ),
    [navigate],
  );

  return (
    <>
      <StackScreenOptions title="Components" />
      <FlatList
        data={components}
        keyExtractor={prop("label")}
        renderItem={renderItem}
      />
    </>
  );
}
