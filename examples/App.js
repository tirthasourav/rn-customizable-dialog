/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { CustomDialog } from 'rn-customizable-dialog';
import { CustomButton } from 'rn-icon-button';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading: false,
      action_required: false,
      visible: false

    }
  }
  render() {
    return (
          // <ScrollView
          //   contentInsetAdjustmentBehavior="automatic"
          //   style={styles.scrollView}>
            <View style={styles.body}>
              <CustomDialog
                title='DIALOG BOX !!'
                message='Hi... I am a customizable dialog !!'
                action_required={this.state.action_required}
                visible={this.state.visible}
                onPress={()=> this.setState({ visible: false })}
                // onConfirm={() => this.onConfirmPressed()}
                buttonPositiveTitle='OK'
                buttonNegativeTitle='ABORT'
                titleTextStyle={{ fontSize: 14, color: 'white' }}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonText}
                bodyTextStyle={styles.dialogBodyText}
                singleButtonTitle='OK'
              />
              <CustomButton 
                buttonStyles={{ width: 100, height: 30, borderColor: 'black', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
                title='Press Me'
                onPress={() => this.setState({ visible: true, action_required: true  })}
              />
            </View>
          // </ScrollView>
    );
  }
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    alignContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  buttonStyle: {
      height: 40,
      width: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#FFFF',
      borderRadius: 12,
      marginLeft: '2%',
      marginRight: '2%'
    },
    buttonText: {
      fontSize: 14,
      color: '#FFFF'
    },
    dialogBodyText: {
      fontSize: 14,
      color: '#FFFF',
      textAlign: 'center'
    },
});

