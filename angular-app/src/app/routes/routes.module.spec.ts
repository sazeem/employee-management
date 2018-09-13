import { RoutesModule } from './routes.module';

fdescribe('RoutesModule', () => {
  let routesModule: RoutesModule;

  beforeEach(() => {
    routesModule = new RoutesModule();
  });

  it('# Should create an instance', () => {
    expect(routesModule).toBeTruthy();
  });
});
