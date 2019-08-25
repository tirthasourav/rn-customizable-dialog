//Author: Sourav Dey
import {
    StyleSheet  // Easing
} from 'react-native';
export const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    activityIndicatorWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    dialogView: {
      width: '75%',
      height: '40%',
      borderColor: '#FFFF',
      borderWidth: 1,
      backgroundColor: '#858585',
      alignItems: 'center',
      borderRadius: 15
    },
    dialogTitle: {
      width: '95%',
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dialogTitleText: {
      fontSize: 14,
      color: '#FFFF'
    },
    dialogBody: {
      width: '95%',
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dialogBodyText: {
      fontSize: 14,
      color: '#FFFF',
      textAlign: 'center'
    },
    buttonStyle: {
      height: '20%',
      width: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#FFFF',
      borderRadius: 12
    },
    dualButtonParent: {
      width: '95%',
      height: '25%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // dualButtonChild: {
    //   height: '75%',
    //   width: '40%',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   borderWidth: 1,
    //   borderColor: '#FFFF',
    //   borderRadius: 12,
    //   marginLeft: '2%',
    //   marginRight: '2%'
    // },
    buttonText: {
      fontSize: 14,
      color: '#FFFF'
    }
  });