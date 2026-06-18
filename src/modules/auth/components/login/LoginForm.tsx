// import React from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import PhoneNumberIcon from '../../../../assets/svg/contact/call.svg';
// import PasswordIcon from '../../../../assets/svg/common/password.svg';
// import VisibilityOnIcon from '../../../../assets/svg/common/visibilityOn.svg';
// import VisibilityOffIcon from '../../../../assets/svg/common/visibilityOff.svg';
// import Logo from '../shared/logo';
// import LinearBg from '../../../../shared/components/LinearBg';
// import { useTheme } from '../../../../core/theme/useTheme';
// import { createStyles } from '../../styles/login.styles';

// const LoginForm = ({ vm }: any) => {
//   const { colors } = useTheme();
//   const styles = createStyles(colors);
  
//   return (
//     <View>
//       {/* LOGO */}
//       <View style={styles.top}>
//         <Logo type="login" />
//       </View>

//       {/* INPUTS */}
//       <View style={styles.middle}>
//         <View
//           style={[
//             styles.inputBox,
//           ]}
//         >
//           <PhoneNumberIcon width={20} height={20} fill={colors.primary} />

//           <TextInput
//             placeholder="Phone Number"
//             placeholderTextColor={colors.textMuted}
//             value={vm.phone}
//             onChangeText={vm.setPhone}
//             style={[styles.input]}
//           />
//         </View>

//         <View
//           style={[
//             styles.inputBox,
//           ]}
//         >
//           <PasswordIcon width={20} height={20} fill={colors.primary} />

//           <TextInput
//             placeholder="Password"
//             placeholderTextColor={colors.textMuted}
//             secureTextEntry={!vm.visible}
//             value={vm.password}
//             onChangeText={vm.setPassword}
//             style={[styles.input]}
//           />

//           <TouchableOpacity onPress={vm.togglePassword}>
//             {vm.visible ? (
//               <VisibilityOnIcon width={20} height={20} fill={colors.primary} />
//             ) : (
//               <VisibilityOffIcon width={20} height={20} fill={colors.primary} />
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* BUTTON */}
//       <View style={styles.bottom}>
//         <TouchableOpacity onPress={vm.handleLogin}>
//           <LinearBg
//             style={styles.button}
//             colors={[colors.textPrimary, colors.surface]}
//           >
//             <Text style={[styles.btnText]}>
//               Login
//             </Text>
//           </LinearBg>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default LoginForm;

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PhoneNumberIcon from '../../../../assets/svg/contact/call.svg';
import PasswordIcon from '../../../../assets/svg/common/password.svg';
import VisibilityOnIcon from '../../../../assets/svg/common/visibilityOn.svg';
import VisibilityOffIcon from '../../../../assets/svg/common/visibilityOff.svg';
import Logo from '../shared/logo';
import LinearBg from '../../../../shared/components/LinearBg';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/login.styles';
import Input from '../../../../shared/components/Input';
import { useTranslation } from 'react-i18next'; 

const LoginForm = ({ vm }: any) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['auth']);

  return (
    <View>

      <View style={styles.top}>
        <Logo type="login" />
      </View>

      <View style={styles.middle}>
        
        <Input
          type="phone"
          placeholder= {t('phoneNumber')}
          placeholderTextColor={colors.textMuted}
          value={vm.phone}
          onChangeText={vm.setPhone}
          containerStyle={styles.inputBox}
          inputStyle={styles.input}       
          renderLeftIcon={() => (
            <PhoneNumberIcon width={20} height={20} fill={colors.primary} />
          )}
          error={vm.phoneError} 
        />

        <Input
          type="password"
          placeholder={t('password')}
          placeholderTextColor={colors.textMuted}
          value={vm.password}
          onChangeText={vm.setPassword}
          containerStyle={styles.inputBox}
          inputStyle={styles.input}
          renderLeftIcon={() => (
            <PasswordIcon width={20} height={20} fill={colors.primary} />
          )}
          renderRightIcon={(isPasswordVisible) =>
            isPasswordVisible ? (
              <VisibilityOnIcon width={20} height={20} fill={colors.primary} />
            ) : (
              <VisibilityOffIcon width={20} height={20} fill={colors.primary} />
            )
          }
          error={vm.passwordError}
        />
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={vm.handleLogin}>
          <LinearBg
            style={styles.button}
            colors={[colors.textPrimary, colors.surface]}
          >
            <Text style={[styles.btnText]}>{t('login')}</Text>
          </LinearBg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;