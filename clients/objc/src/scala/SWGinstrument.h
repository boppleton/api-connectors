#import <Foundation/Foundation.h>
#import "SWGObject.h"
#import "SWGDate.h"


@interface SWGInstrument : SWGObject

@property(nonatomic) NSString* symbol;  

@property(nonatomic) NSString* state;  

@property(nonatomic) NSString* typ;  

@property(nonatomic) SWGDate* listing;  

@property(nonatomic) SWGDate* expiry;  

@property(nonatomic) NSString* underlying;  

@property(nonatomic) NSString* buyLeg;  

@property(nonatomic) NSString* sellLeg;  

@property(nonatomic) NSString* quoteCurrency;  

@property(nonatomic) NSString* reference;  

@property(nonatomic) NSString* referenceSymbol;  

@property(nonatomic) NSNumber* tickSize;  

@property(nonatomic) NSNumber* multiplier;  

@property(nonatomic) NSString* settlCurrency;  

@property(nonatomic) NSNumber* initMargin;  

@property(nonatomic) NSNumber* maintMargin;  

@property(nonatomic) NSNumber* limit;  

@property(nonatomic) SWGDate* openingTimestamp;  

@property(nonatomic) SWGDate* closingTimestamp;  

@property(nonatomic) NSNumber* prevClosePrice;  

@property(nonatomic) NSNumber* limitDownPrice;  

@property(nonatomic) NSNumber* limitUpPrice;  

@property(nonatomic) NSNumber* volume;  

@property(nonatomic) NSNumber* vwap;  

@property(nonatomic) NSNumber* highPrice;  

@property(nonatomic) NSNumber* lowPrice;  

@property(nonatomic) NSNumber* lastPrice;  

@property(nonatomic) NSString* lastTickDirection;  

@property(nonatomic) NSNumber* lastChangePcnt;  

@property(nonatomic) NSNumber* bidPrice;  

@property(nonatomic) NSNumber* midPrice;  

@property(nonatomic) NSNumber* askPrice;  

@property(nonatomic) NSNumber* openInterest;  

@property(nonatomic) NSNumber* settledPrice;  

@property(nonatomic) SWGDate* timestamp;  

- (id) symbol: (NSString*) symbol
     state: (NSString*) state
     typ: (NSString*) typ
     listing: (SWGDate*) listing
     expiry: (SWGDate*) expiry
     underlying: (NSString*) underlying
     buyLeg: (NSString*) buyLeg
     sellLeg: (NSString*) sellLeg
     quoteCurrency: (NSString*) quoteCurrency
     reference: (NSString*) reference
     referenceSymbol: (NSString*) referenceSymbol
     tickSize: (NSNumber*) tickSize
     multiplier: (NSNumber*) multiplier
     settlCurrency: (NSString*) settlCurrency
     initMargin: (NSNumber*) initMargin
     maintMargin: (NSNumber*) maintMargin
     limit: (NSNumber*) limit
     openingTimestamp: (SWGDate*) openingTimestamp
     closingTimestamp: (SWGDate*) closingTimestamp
     prevClosePrice: (NSNumber*) prevClosePrice
     limitDownPrice: (NSNumber*) limitDownPrice
     limitUpPrice: (NSNumber*) limitUpPrice
     volume: (NSNumber*) volume
     vwap: (NSNumber*) vwap
     highPrice: (NSNumber*) highPrice
     lowPrice: (NSNumber*) lowPrice
     lastPrice: (NSNumber*) lastPrice
     lastTickDirection: (NSString*) lastTickDirection
     lastChangePcnt: (NSNumber*) lastChangePcnt
     bidPrice: (NSNumber*) bidPrice
     midPrice: (NSNumber*) midPrice
     askPrice: (NSNumber*) askPrice
     openInterest: (NSNumber*) openInterest
     settledPrice: (NSNumber*) settledPrice
     timestamp: (SWGDate*) timestamp;

- (id) initWithValues: (NSDictionary*)dict;
- (NSDictionary*) asDictionary;


@end
