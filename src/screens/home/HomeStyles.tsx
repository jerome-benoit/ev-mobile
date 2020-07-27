import deepmerge from 'deepmerge';
import ResponsiveStylesheet from 'react-native-responsive-stylesheet';
import { ScaledSheet } from 'react-native-size-matters';
import Utils from '../../utils/Utils';

export default function computeStyleSheet(): any {
  const commonColor = Utils.getCurrentCommonColor();
  const commonStyles = ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      height: '100%',
      backgroundColor: commonColor.containerBgColor
    },
    spinner: {
      flex: 1,
      backgroundColor: commonColor.containerBgColor
    },
    cards: {
      padding: '10@s',
      backgroundColor: commonColor.headerBgColor,
    },
    card: {
      padding: '5@s',
      backgroundColor: commonColor.headerBgColor,
    },
    cardItem: {
      backgroundColor: commonColor.headerBgColor,
    },
    tabHeader: {},
    cardIcon: {
      textAlign: 'center',
      fontSize: '50@s',
      width: '55@s',
      color: commonColor.textColor,
    },
    cardText: {
      fontSize: '20@s',
      color: commonColor.textColor,
    },
    cardNote: {
      fontStyle: 'italic',
      fontSize: '12@s',
      color: commonColor.subTextColor,
    }
  });
  const portraitStyles = {};
  const landscapeStyles = {};
  return ResponsiveStylesheet.createOriented({
    landscape: deepmerge(commonStyles, landscapeStyles),
    portrait: deepmerge(commonStyles, portraitStyles)
  });
}
