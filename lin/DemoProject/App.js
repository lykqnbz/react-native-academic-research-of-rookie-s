/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'

const devWidthDp = Dimensions.get('window').width;
const UIWidthPx = 750;
//自适应单位转换函数
function dp(uiPx) {
  return uiPx * devWidthDp / 750;
}

// 我的页面
class MyPage extends Component {
  render() {
    return (
      <ScrollView style={styles.containerScroll}>
        <StatusBar barStyle="#fff" backgroundColor="#1B4AE8" />
        <View style={styles.headerWrap}>
          <Image style={{ width: dp(128), height: dp(128) }} source={require("./static/images/touxiang_03.png")}></Image>
          <View style={{ height: dp(128), marginLeft: dp(30), justifyContent: 'space-around' }}>
            <Text style={{ fontSize: dp(40), color: '#fff', fontWeight: 'bold' }}>Cookie</Text>
            <Text style={{ fontSize: dp(24), color: '#fff', fontWeight: 'bold' }}>厦门链石商城有限公司</Text>
          </View>
          <View style={{ position: 'absolute', right: dp(57), top: dp(63) }}>
            <Image style={{ width: dp(36), height: dp(44) }} source={require('./static/images/icon_news_white1.png')}></Image>
            <Text style={styles.headMsgCount}>2</Text>
          </View>

        </View>
        <View style={styles.mainWrap}>
          <View style={{ width: '100%', height: dp(130), marginTop: dp(29), paddingLeft: dp(31), paddingRight: dp(31) }}>
            <ImageBackground source={require('./static/images/img_balance.png')} imageStyle={{ borderRadius: dp(20) }} style={{ width: '100%', height: '100%' }}>
              <View style={{ paddingLeft: dp(48), paddingRight: dp(30), flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
                <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                  <Text style={{ color: '#9EBFFF', fontSize: dp(24), fontWeight: 'bold', marginTop: dp(15) }}>剩余石头</Text>
                  <Text style={{ color: '#fff', fontSize: dp(36), fontWeight: 'bold', marginBottom: dp(15) }}>1,800.00</Text>
                </View>
                <View style={{ height: '100%', justifyContent: 'space-around' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: dp(24), fontWeight: 'bold', color: '#fff' }}>充值</Text>
                    <Image style={{ marginLeft: dp(15), marginTop: dp(10) }} source={require('./static/images/btn_enter_balance.png')}></Image>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.myMainItemWrap}>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_transaction.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>交易记录</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_enterprise.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>我的企业</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_warehouse.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>我的同事</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/btn_performance.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>员工绩效</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_device.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>我的设备</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
          </View>
          <View style={styles.myMainItemWrap}>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_about.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>资质认证</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_feedback.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>成员审核</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
          </View>
          <View style={styles.myMainItemWrap}>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_manual.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>手动规划切割记录</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_service.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>提交故障记录</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
          </View>
          <View style={styles.myMainItemWrap}>
            <View style={styles.myMainItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: dp(44), height: dp(44) }} source={require('./static/images/icon_setting.png')}></Image>
                <Text style={{ marginLeft: dp(30), color: '#333', fontSize: dp(30) }}>设置</Text>
              </View>
              <Image source={require('./static/images/btn_enter_l.png')}></Image>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
//交易记录
class TradingRecordPage extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: dp(30), height: dp(88) }}>
          <Image style={{ width: dp(24), height: dp(36) }} source={require('./static/images/leftArrow.png')}></Image>
        </View>
        <View style={{ height: dp(190), paddingLeft: dp(30), paddingRight: dp(30) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: dp(37) }}>
            <Text style={{ color: '#333333', fontSize: dp(50), fontWeight: 'bold' }}>交易记录</Text>
            <Text style={{ fontSize: dp(30), fontWeight: 'bold', color: '#666666' }}>统计</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={{ backgroundColor: '#fff' }}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            selectedTitleStyle={{ color: "#333333" }}//设置tab标题颜色
            renderIcon={() => <Image style={styles.icon} source={require('./static/images/btn_my_pre.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: '#333333' }]} source={require('./static/images/btn_my_pre.png')} />}//设置图标选中颜色
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.pages1}>
              <TradingRecordPage></TradingRecordPage>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'xiangmu'}
            title="工程项目"
            selectedTitleStyle={{ color: "#333333" }}
            // badgeText="1"
            renderIcon={() => <Image style={styles.icon} source={require('./static/images/btn_my_pre.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: '#333333' }]} source={require('./static/images/btn_my_pre.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'xiangmu' })}>
            <View style={styles.pages2}>
              <Text>工程项目</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'shebei'}
            title="设备"
            selectedTitleStyle={{ color: "#333333" }}
            renderIcon={() => <Image style={styles.icon} source={require('./static/images/btn_my_pre.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: '#333333' }]} source={require('./static/images/btn_my_pre.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'shebei' })}>
            <View style={styles.pages3}>
              <Text>设备</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'wode'}
            title="我的"
            selectedTitleStyle={{ color: "#333333" }}
            badgeText="1"
            renderIcon={() => <Image style={styles.icon} source={require('./static/images/btn_my_pre.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: '#333333' }]} source={require('./static/images/btn_my_pre.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'wode' })}>
            <View style={styles.pages4}>
              <MyPage></MyPage>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages1: {
    flex: 1,
  },
  pages4: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  containerScroll: {
    flex: 1,
  },
  headerWrap: {
    backgroundColor: '#1B4AE8',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    height: dp(290),
    paddingLeft: dp(31),
    paddingRight: dp(31)
  },
  headMsgCount: {
    position: 'absolute',
    right: "-60%",
    top: "-60%",
    width: dp(40),
    height: dp(40),
    lineHeight: dp(40),
    textAlign: 'center',
    backgroundColor: "#FF2553",
    borderRadius: dp(20),
    color: '#fff'
  },
  mainWrap: {
    backgroundColor: '#fff',
    borderTopLeftRadius: dp(22),
    borderTopRightRadius: dp(22),
    marginTop: -dp(50),
    backgroundColor: '#fff'
  },
  myMainItemWrap: {
    paddingLeft: dp(31),
    paddingRight: dp(31),
    borderBottomWidth: dp(10),
    borderBottomColor: '#F7F9FB'
  },
  myMainItem: {
    height: dp(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  }
})

AppRegistry.registerComponent('App', () => App)
