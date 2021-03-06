/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SliderIOS
} = React;

var windowWidth = require('Dimensions').get('window').width;

var FlexImageDemo = React.createClass({
  getInitialState: function () {
    return {
      value: 0.75
    };
  },

  render: function() {

    /*
     * The width of the parent view of the images
     * can be changes using the slider!
     */
    var viewWidth = this.state.value * windowWidth;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcome}>
         Flex Images Demo
        </Text>
        <Text style={styles.instructions}>
          The two images are wrapped inside a view. Its width is controlled using the slider below. There is no styling on the images.
        </Text>

        <SliderIOS
          style={styles.slider}
          value={this.state.value}
          onValueChange={(value) => this.setState({value: value})} />

        <View style={{width: viewWidth, backgroundColor: 'white'}}>
          <Text style={styles.instructions}>
            Static Image
          </Text>
          <Image source={require('image!steve-bill-2')} />

          <Text style={styles.instructions}>
            Remote Image
          </Text>

          <Image source={{
            uri: "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg",
            width: 612,
            height: 456
          }} />
          </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  slider: {
    alignSelf: 'stretch',
    height: 10,
    margin: 10,
  },
});

AppRegistry.registerComponent('FlexImageDemo', () => FlexImageDemo);
