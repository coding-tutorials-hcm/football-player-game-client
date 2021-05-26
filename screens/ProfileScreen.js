import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { 
  Layout, 
  Text,
  Avatar,
  Card,
  List 
} from "@ui-kitten/components";

const Home = (props) => (
  <View {...props}>
    <Text category='h6'>Home</Text>
  </View>
);
const Rank = (props) => (
  <View {...props}>
    <Text category='h6'>Rank</Text>
  </View>
);
const Quiz = (props) => (
  <View {...props}>
    <Text category='h6'>Quiz</Text>
  </View>
);
const History = (props) => (
  <View {...props}>
    <Text category='h6'>History</Text>
  </View>
);
const User = (props) => (
  <View {...props}>
    <Text category='h6'>User</Text>
  </View>
);

export default function Profile() {
  return (
    <Layout style={styles.container}>
        <View style={styles.profile}>
          <Avatar style={styles.avatar} size='giant' source={require('../assets/images/avatar.jpg')}/>
          <Text style={styles.name} status='basic'>Peter Cansano</Text>
          <Text style={styles.point} status='basic'>10.341 points</Text>
        </View>

        <View style={styles.userManual}>
          <Text style={styles.quizTitle} status='basic'>User Manual</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card style={styles.card} header={Home}>
              <Text style={styles.textManual}>
                The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                continent
              </Text>
            </Card>
            <Card style={styles.card} header={Rank}>
              <Text style={styles.textManual}>
                The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                continent
              </Text>
            </Card>
            <Card style={styles.card} header={Quiz}>
              <Text style={styles.textManual}>
                The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                continent
              </Text>
            </Card>
            <Card style={styles.card} header={History}>
              <Text style={styles.textManual}>
                The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                continent
              </Text>
            </Card>
            <Card style={styles.card} header={User}>
              <Text style={styles.textManual}>
                The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                continent
              </Text>
            </Card>
          </ScrollView>
         
        </View>
        
    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    fontFamily: "poppins-extralight",
    backgroundColor: "#F3F5F9",
  },
  profile:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
    width: '100%',
    height: 150,
    backgroundColor: '#ffffff'
  },
  name:{
    fontSize: 14,
  },
  point:{
    fontSize: 10,
  },
  userManual:{
    flex: 1,
    backgroundColor: '#B1C8E8',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  quizTitle:{
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  card:{
    marginTop: 10
  },
  textManual:{
    textAlign:'justify'
  }
});