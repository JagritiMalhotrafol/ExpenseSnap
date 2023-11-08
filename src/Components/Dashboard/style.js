import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5FCFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    textAlign: 'right', 
    padding: 10,       
    marginVertical: 5,
    borderWidth: 1,    
    borderColor: '#ccc', 
    borderRadius: 5,   
    fontSize: 18,     
  },

  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
});
export default styles;
