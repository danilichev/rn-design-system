import { Stack, useNavigation } from "expo-router";
import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { Text } from "src/components/Text";
import { Touchable } from "src/components/Touchable";
import { prop } from "src/utils/common";

const components: Option[] = [{ label: "Button", value: "button" }];

const IndexScreen = () => {
  const { navigate } = useNavigation();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Option>) => (
      <Touchable
        borderBottomColor="silver"
        borderBottomWidth={1}
        onPress={() => {
          //@ts-ignore
          navigate(`components/${item.value}`);
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
      <Stack.Screen options={{ title: "Components" }} />
      <FlatList
        data={components}
        keyExtractor={prop("label")}
        renderItem={renderItem}
      />
    </>
  );
};

export default IndexScreen;
