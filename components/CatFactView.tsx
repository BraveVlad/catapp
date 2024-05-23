import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

type CatFact = {
  createdAt: string;
  deleted: boolean;
  source: string;
  status: { verified: boolean; sentCount: number };
  text: string;
  type: string;
  updatedAt: Date;
  used: boolean;
  user: string;
  __v: number;
  _id: string;
};

function getCatFact() {
  return fetch("https://cat-fact.herokuapp.com/facts")
    .then(async (response) => {
      const data = (await response.json()) as CatFact[];
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}

function CatFactView() {
  const [catFact, setCatFact] = useState<CatFact[] | undefined>();
  // Set use effect

  useEffect(() => {
    //runs on mount

    const catFact = getCatFact().then(setCatFact);

    return () => {
      // runs on unmount
    };
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(catFact)}</Text>
    </View>
  );
}

export default CatFactView;

const styles = StyleSheet.create({});
