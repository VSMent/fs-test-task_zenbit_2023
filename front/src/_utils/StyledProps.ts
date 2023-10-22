import AllAttributes from '@/_utils/CommonCssAttributes';

export const f = (props: AllAttributes) => {
  const config: any = {};
  Object.entries(props).forEach(([key, value]) => {
    if (value)
      config[`$${key}`] = value;
  });
};