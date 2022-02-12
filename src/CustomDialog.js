/*Author: Sourav Dey*/
/*Custom Dialogs*/
import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const CustomDialog = props => {
  const {
    visible,
    action_required,
    title,
    message,
    onPress,
    onConfirm,
    buttonPositiveTitle,
    buttonNegativeTitle,
    buttonStyle,
    buttonTextStyle,
    titleTextStyle,
    bodyTextStyle,
    singleButtonTitle,
  } = props;

  return (
    <Modal
      transparent
      animationType={'none'}
      visible={visible}
      onRequestClose={() => { }}
    >
      <View style={styles.modalBackground}>
      {
        action_required ?
        <View style={styles.dialogView}>
          <View style={styles.dialogTitle}>
            <Text style={titleTextStyle}>{title}</Text>
          </View>
          <View style={styles.dialogBody}>
            <Text style={bodyTextStyle}>{message}</Text>
          </View>
          <View style={styles.dualButtonParent}>
             <TouchableOpacity
              style={buttonStyle}
              onPress={onPress}
            >
              <Text style={buttonTextStyle}>{buttonNegativeTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={buttonStyle}
              onPress={onConfirm}
            >
              <Text style={buttonTextStyle}>{buttonPositiveTitle}</Text>
            </TouchableOpacity>
          </View>
        </View>
        :
        <View style={styles.dialogView}>
          <View style={styles.dialogTitle}>
            <Text style={titleTextStyle}>{title}</Text>
          </View>
          <View style={styles.dialogBody}>
            <Text style={bodyTextStyle}>{message}</Text>
          </View>
          <TouchableOpacity>

          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
          >
            <Text style={buttonTextStyle}>{singleButtonTitle}</Text>
          </TouchableOpacity>
        </View>
      }
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  buttonText: {
    fontSize: 14,
    color: '#FFFF'
  }
});

export default CustomDialog;
