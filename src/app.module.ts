import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AuthSecondLevel from 'auth-second-level';

@Module({
	imports: [],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {
	public configure(consumer: MiddlewareConsumer): void {
		consumer.apply(AuthSecondLevel.validateUUID).forRoutes(
      { path: '/uuid', method: RequestMethod.GET }
    );
		consumer.apply(AuthSecondLevel.validateAccountId).forRoutes(
      { path: '/accountid', method: RequestMethod.GET }
    );
		consumer.apply(AuthSecondLevel.validateBillingProfile).forRoutes(
      { path: '/billing-profile', method: RequestMethod.GET }
    );
		consumer.apply(AuthSecondLevel.validateNrDocument).forRoutes(
      { path: '/nrdocument', method: RequestMethod.GET }
    );
	}
}
