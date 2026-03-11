import {AccessibilityInfo, Platform} from 'react-native';

/**
 * Announce a message to screen readers (VoiceOver / TalkBack).
 * Used for dynamic error messages, success confirmations, etc.
 */
export function announceForAccessibility(message: string): void {
  if (message) {
    if (Platform.OS === 'ios') {
      // Small delay on iOS so the announcement doesn't conflict with focus changes
      setTimeout(() => {
        AccessibilityInfo.announceForAccessibility(message);
      }, 100);
    } else {
      AccessibilityInfo.announceForAccessibility(message);
    }
  }
}
