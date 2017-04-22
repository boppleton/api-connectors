/**
 * BitMEX API
 * ## REST API for the BitMEX Trading Platform  [Changelog](/app/apiChangelog)    #### Getting Started   ##### Fetching Data  All REST endpoints are documented below. You can try out any query right from this interface.  Most table queries accept `count`, `start`, and `reverse` params. Set `reverse=true` to get rows newest-first.  Additional documentation regarding filters, timestamps, and authentication is available in [the main API documentation](https://www.bitmex.com/app/restAPI).  *All* table data is available via the [Websocket](/app/wsAPI). We highly recommend using the socket if you want to have the quickest possible data without being subject to ratelimits.  ##### Return Types  By default, all data is returned as JSON. Send `?_format=csv` to get CSV data or `?_format=xml` to get XML data.  ##### Trade Data Queries  *This is only a small subset of what is available, to get you started.*  Fill in the parameters and click the `Try it out!` button to try any of these queries.  * [Pricing Data](#!/Quote/Quote_get)  * [Trade Data](#!/Trade/Trade_get)  * [OrderBook Data](#!/OrderBook/OrderBook_getL2)  * [Settlement Data](#!/Settlement/Settlement_get)  * [Exchange Statistics](#!/Stats/Stats_history)  Every function of the BitMEX.com platform is exposed here and documented. Many more functions are available.  -  ## All API Endpoints  Click to expand a section. 
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/XAny'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XAny'));
  } else {
    // Browser globals (root is window)
    if (!root.BitMexApi) {
      root.BitMexApi = {};
    }
    root.BitMexApi.Wallet = factory(root.BitMexApi.ApiClient, root.BitMexApi.XAny);
  }
}(this, function(ApiClient, XAny) {
  'use strict';




  /**
   * The Wallet model module.
   * @module model/Wallet
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Wallet</code>.
   * @alias module:model/Wallet
   * @class
   * @param account {Number} 
   * @param currency {String} 
   */
  var exports = function(account, currency) {
    var _this = this;

    _this['account'] = account;
    _this['currency'] = currency;
















  };

  /**
   * Constructs a <code>Wallet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Wallet} obj Optional instance to populate.
   * @return {module:model/Wallet} The populated <code>Wallet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account')) {
        obj['account'] = ApiClient.convertToType(data['account'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('prevDeposited')) {
        obj['prevDeposited'] = ApiClient.convertToType(data['prevDeposited'], 'Number');
      }
      if (data.hasOwnProperty('prevWithdrawn')) {
        obj['prevWithdrawn'] = ApiClient.convertToType(data['prevWithdrawn'], 'Number');
      }
      if (data.hasOwnProperty('prevAmount')) {
        obj['prevAmount'] = ApiClient.convertToType(data['prevAmount'], 'Number');
      }
      if (data.hasOwnProperty('prevTimestamp')) {
        obj['prevTimestamp'] = ApiClient.convertToType(data['prevTimestamp'], 'Date');
      }
      if (data.hasOwnProperty('deltaDeposited')) {
        obj['deltaDeposited'] = ApiClient.convertToType(data['deltaDeposited'], 'Number');
      }
      if (data.hasOwnProperty('deltaWithdrawn')) {
        obj['deltaWithdrawn'] = ApiClient.convertToType(data['deltaWithdrawn'], 'Number');
      }
      if (data.hasOwnProperty('deltaAmount')) {
        obj['deltaAmount'] = ApiClient.convertToType(data['deltaAmount'], 'Number');
      }
      if (data.hasOwnProperty('deposited')) {
        obj['deposited'] = ApiClient.convertToType(data['deposited'], 'Number');
      }
      if (data.hasOwnProperty('withdrawn')) {
        obj['withdrawn'] = ApiClient.convertToType(data['withdrawn'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('pendingCredit')) {
        obj['pendingCredit'] = ApiClient.convertToType(data['pendingCredit'], 'Number');
      }
      if (data.hasOwnProperty('pendingDebit')) {
        obj['pendingDebit'] = ApiClient.convertToType(data['pendingDebit'], 'Number');
      }
      if (data.hasOwnProperty('confirmedDebit')) {
        obj['confirmedDebit'] = ApiClient.convertToType(data['confirmedDebit'], 'Number');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
      if (data.hasOwnProperty('addr')) {
        obj['addr'] = ApiClient.convertToType(data['addr'], 'String');
      }
      if (data.hasOwnProperty('withdrawalLock')) {
        obj['withdrawalLock'] = ApiClient.convertToType(data['withdrawalLock'], [XAny]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} account
   */
  exports.prototype['account'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {Number} prevDeposited
   */
  exports.prototype['prevDeposited'] = undefined;
  /**
   * @member {Number} prevWithdrawn
   */
  exports.prototype['prevWithdrawn'] = undefined;
  /**
   * @member {Number} prevAmount
   */
  exports.prototype['prevAmount'] = undefined;
  /**
   * @member {Date} prevTimestamp
   */
  exports.prototype['prevTimestamp'] = undefined;
  /**
   * @member {Number} deltaDeposited
   */
  exports.prototype['deltaDeposited'] = undefined;
  /**
   * @member {Number} deltaWithdrawn
   */
  exports.prototype['deltaWithdrawn'] = undefined;
  /**
   * @member {Number} deltaAmount
   */
  exports.prototype['deltaAmount'] = undefined;
  /**
   * @member {Number} deposited
   */
  exports.prototype['deposited'] = undefined;
  /**
   * @member {Number} withdrawn
   */
  exports.prototype['withdrawn'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Number} pendingCredit
   */
  exports.prototype['pendingCredit'] = undefined;
  /**
   * @member {Number} pendingDebit
   */
  exports.prototype['pendingDebit'] = undefined;
  /**
   * @member {Number} confirmedDebit
   */
  exports.prototype['confirmedDebit'] = undefined;
  /**
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {String} addr
   */
  exports.prototype['addr'] = undefined;
  /**
   * @member {Array.<module:model/XAny>} withdrawalLock
   */
  exports.prototype['withdrawalLock'] = undefined;



  return exports;
}));

