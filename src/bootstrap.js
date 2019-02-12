import {create} from "jss";
import jssPreset from "@material-ui/core/styles/jssPreset";
import preset from 'jss-preset-default'
import defaultUnit from 'jss-plugin-default-unit'
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'
// import {install} from '@material-ui/styles';

// necessary if you want to use '@material-ui/styles'
// https://material-ui.com/css-in-js/basics/#migration-for-material-ui-core-users
// install();

// setup custom JSS instance
// https://cssinjs.org/jss-preset-default?v=v10.0.0-alpha.10#default-preset-for-jss-with-selected-plugins
//
// use Material-UI's default JSS plugins
// https://material-ui.com/customization/css-in-js/#plugins
export const jssMuiPreset = () => {
  const presets = jssPreset();
  const plugins = [...jssPreset().plugins];
  plugins[3] = defaultUnit({
      'padding': 'rem'
    });
  const options = {
    plugins: [
      ...plugins
    ]
  };
  console.log('---');
  console.log(presets);
  console.log(options);
  return create(options);
};

export const jssDefaultPreset = () => {
  const presets = preset();
  const options = preset({
    defaultUnit:{
      padding: 'rem'
    }
  });
  console.log('---');
  console.log(presets);
  console.log(options);
  return create(options);
};

export const jss = () => {
  return create(preset());
};

// CSS class name generator function
// https://material-ui.com/css-in-js/api/#creategenerateclassname-options-class-name-generator
export const generateClassName = createGenerateClassName({
  productionPrefix: 'dp'
});
