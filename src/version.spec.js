describe('application version', () => {

  let cut = require('./version');

  it('should be able to retrieve the version from the package.json file', () => {
    expect(cut.applicationVersion).toBeDefined();
  });

  it('should be able to retrieve the name of the application', () => {
    expect(cut.applicationName).toBe('lambda-pipeline');
  });

});
