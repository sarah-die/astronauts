import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
const { Text } = Typography;

export const GlobalFooter = () => {
  const { t } = useTranslation();

  return <Text>{t('footer')}</Text>;
};
