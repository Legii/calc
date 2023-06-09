//import liraries
import React, { Component,useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet,FlatList, SafeAreaView,StatusBar } from 'react-native';
import MyButton from './Button';




const App = () => {
  const [text,setText] = useState("")
  const [result,setResult] = useState("")
  const [isHorizontal, setHorizontal] = useState(false)


  isLandscape = () => {
    let dim = Dimensions.get('screen');
    return dim.width >= dim.height;
 };
  Dimensions.addEventListener("change", () => {
   setHorizontal(isLandscape())
   
  })
  const addToText = (n) => {
    const a = n.toString()
    let newval = text
    if (isNaN(n))    
      newval+=" "+a.toString()+" "
    else newval +=a
    try {
    setResult(betterEval(newval))}
      catch{}
    setText(newval)
  }


  const betterEval = (t)=> {
    return eval(t.replace("^","**"))
  }
  const changeBoth = (t)=> {
    
    setText(t)
    try {
      setResult(betterEval(t))}
        catch{}
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
        <View style={{flex:1, backgroundColor:"blue"}}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={{flex:1, backgroundColor:"red"}}>
        <Text style={styles.text}>{result}</Text>
        </View>
        <View style={{flex:4, backgroundColor:"blue",flexDirection:"row"}}>
          <View style={{flex:3, backgroundColor:"gray"}}>
            <View style={styles.row}>
              {
                Array.from({ length: 3 }, (value, index) => index +1 ).map((val)=>   <MyButton action={() => addToText(val)} text={val}/>)
              }
        
          
            </View>
            <View style={styles.row}>
            {
                Array.from({ length: 3 }, (value, index) => index +4 ).map((val)=>   <MyButton  action={() => addToText(val)} text={val}/>)
              }

            </View>
            <View style={styles.row}>
            {
                Array.from({ length: 3 }, (value, index) => index +7 ).map((val)=>   <MyButton action={() => addToText(val)} text={val}/>)
              }

            </View>
            <View style={styles.row}>
            <MyButton text={'.'}/>
            <MyButton text={'0'}  action={() => addToText("0")}/>
            <MyButton text={'='} action={()=> setText(result)}/>
           
      
            </View>

          </View>
            
         {isHorizontal && (<View style={{flex:1, backgroundColor:"green"}}> 
                <MyButton text={'Pow'} action={() => addToText("^")}/>
                <MyButton text={'+'} action={() => addToText("+")}/>
                <MyButton text={'-'} action={() => addToText("-")}/>
            </View>)}


            <View style={{flex:1, backgroundColor:"green"}}> 

                <MyButton text={'Del'} action={()=>changeBoth("")}/>
                <MyButton text={'C'} action={() => changeBoth(text.trim().slice(0, -1))}/>
                <MyButton text={'+'} action={() => addToText("+")}/>
                <MyButton text={'-'} action={() => addToText("-")}/>
                <MyButton text={'*'} action={() => addToText("*")}/>
                <MyButton text={'/'} action={() => addToText("/")}/>
            </View>

        </View>

    </SafeAreaView>
    
  );
};
const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color:"white",
    fontSize:40
  },
   row: {
    display:"flex",
    flex:1,
    flexDirection:"row"

   }
})


//make this component available to the app
export default App;
