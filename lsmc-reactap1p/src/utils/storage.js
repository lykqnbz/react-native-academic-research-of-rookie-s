import AsyncStorage from '@react-native-community/async-storage'

class Storage {
  /**
   * 清楚所有缓存
   */
  clear = () => {
    AsyncStorage.clear()
  }

  /**
   * 获取某项缓存
   * @param {*} key 缓存索引
   */
  getItem = async key => {
    let data = await AsyncStorage.getItem(key)
    let result;
    try {
      result = JSON.parse(data)
    } catch (error) {
      result = data
    }
    return result;
  }

  /**
   * 获取某项缓存的同步方法
   * @param {String} key 缓存的索引
   */
  getItemAsyc = key => {
    return AsyncStorage.getItem(key, function (err, result) {
      result
    })
  }

  /**
   * 设置缓存数据
   * @param {*} key 缓存索引
   * @param {*} value 缓存值
   */
  setItem = async (key, value) => {
    if (typeof value != 'string') {
      value = JSON.stringify(value)
    }
    return await AsyncStorage.setItem(key, value)
  }

  /**
   * 移除某项缓存
   * @param {*} key 缓存索引
   */
  removeItem = async key => {
    return await AsyncStorage.removeItem(key)
  }


  // async _getAreaData() {
  //   console.log('我要开始获取所有的区域数据了')
  //   let areas = await Storage.getItem('base_area')
  //   console.log('本地you 数据了饿么？', areas)
  //   if (!areas) {
  //     getAllArea().then(resp => {
  //       console.log('所有的区域', resp)
  //       Storage.setItem('base_area', resp)
  //       this.setState({
  //         areas: resp
  //       })
  //     })
  //   } else {
  //     this.setState({
  //       areas: areas
  //     })
  //   }
  // }
}

export default new Storage()


// "react-native-update-cli": "^0.1.0",
// "react-native-webview": "^5.12.1",
// "react-navigation": "^3.11.1",
// "react-redux": "^7.1.0",
// "redux": "^4.0.4",
// "redux-actions": "^2.6.5",
// "redux-logger": "^3.0.6",
// "redux-thunk": "^2.3.0",
// "reselect": "^4.0.0",
// "rn-placeholder": "^2.0.0"