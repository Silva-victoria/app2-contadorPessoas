import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { styles } from './style';

 
class App extends Component{
constructor(props){
super(props);

this.state = {numero: 0};
this.aumentar = this.aumentar.bind(this);
this.diminuir = this.diminuir.bind(this);

  }

    aumentar(){ this.setState({numero: this.state.numero +1 });

    }

    diminuir(){ this.setState({numero: this.state.numero -1});

  }

  render(){
    return(
            <View style={styles.container}>
                
                
                <Text style={styles.textoPrincipal}><b>Contador de pessoas</b></Text>
                <Text style={styles.textoPrincipal}><b>{'\n'}{this.state.numero}</b></Text>
                
            <View style={styles.botao}>
                <Button color='green' title="+" onPress={this.aumentar} />
                <Button color='red' title="-" onPress={this.diminuir} />

            </View>
            </View>

    );
  }
}

 

export default App;