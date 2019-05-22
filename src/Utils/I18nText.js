import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'
import {withNavigation} from 'react-navigation'
import i18n from 'i18n-js'

const I18nText = ({navigation, t, containerStyle, ...props}) => {
  return <View style={containerStyle}>
    <Text {...props}>{i18n.t(`screens.${navigation.state.routeName}.${t}`)}</Text>
  </View>
};

I18nText.defaultProps = {
  containerStyle: {},
};

I18nText.propTypes = {
  t: PropTypes.string.isRequired,
    ...Text.propTypes
};

export default withNavigation(I18nText)