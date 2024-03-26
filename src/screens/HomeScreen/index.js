import { FlatList, SafeAreaView, View } from "react-native";
import React from "react";
import MailSearchBar from "../../components/MailSearchBar";
import styles from "./styles";
import TopMailsSection from "../../components/TopMailsSection";
import MailCard from "../../components/MailCard";
import EmailsList from "../../assets/data/EmailsList";
import CreateMail from "../../components/CreateMail";

const HomeScreen = () => {
  const TopComponents = () => {
    return (
      <>
        <MailSearchBar />
        <TopMailsSection />
      </>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CreateMail />
        <FlatList
          ListHeaderComponent={<TopComponents />}
          data={EmailsList}
          renderItem={({ item }) => <MailCard email={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
