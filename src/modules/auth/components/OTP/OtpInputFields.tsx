import React from 'react';
import { View, TextInput } from 'react-native';

interface OtpInputFieldsProps {
  code: string[];
  activeCodeIndex: number;
  inputRefs: React.MutableRefObject<TextInput[]>;
  handleTextChange: (text: string, index: number) => void;
  handleKeyPress: (e: any, index: number) => void;
  setActiveCodeIndex: (index: number) => void;
  styles: any;
}

export default function OtpInputFields({
  code,
  activeCodeIndex,
  inputRefs,
  handleTextChange,
  handleKeyPress,
  setActiveCodeIndex,
  styles,
}: OtpInputFieldsProps) {
  return (
    <View style={styles.otpContainer}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          style={[
            styles.otpInput,
            activeCodeIndex === index && styles.otpInputActive,
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleTextChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          onFocus={() => setActiveCodeIndex(index)}
        />
      ))}
    </View>
  );
}