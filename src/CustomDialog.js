/*Author: Sourav Dey*/
/*Custom Dialogs*/
import React from 'react';
import {
  View,
  Modal,
  Text
} from 'react-native';
import {styles} from './CustomDialogStyle';
import { CustomButton } from 'rn-icon-button';

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
    icon,
    iconSize
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
            <CustomButton
              title={buttonNegativeTitle}
              buttonStyles={buttonStyle}
              buttonTextStyles={buttonTextStyle}
              onPress={onPress}
              icon={icon}
              iconSize={iconSize}
            />
            <CustomButton
              title={buttonPositiveTitle}
              buttonStyles={buttonStyle}
              buttonTextStyles={buttonTextStyle}
              onPress={onConfirm}icon={icon}
              iconSize={iconSize}
            />
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
          <CustomButton
            title={singleButtonTitle}
            buttonStyles={buttonStyle}
            buttonTextStyles={buttonTextStyle}
            onPress={onPress}
            icon={icon}
            iconSize={iconSize}
          />
        </View>
      }
      </View>
    </Modal>
  );
};
export default CustomDialog;
