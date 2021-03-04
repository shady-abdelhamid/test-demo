import { TestBed } from '@angular/core/testing';

import { S2Service } from './s2.service';

describe('S2Service', () => {
  let service: S2Service;
 

  beforeEach(() => { service = new S2Service(); });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  describe('#getValue', () => {
    it('should return real value', () => {
      expect(service.getValue()).toBe('real value');
    });
  });

  describe('#getObservableValue', () => {
    it(' should return value from observable',
      (done: DoneFn) => {
      service.getObservableValue().subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    });
  });

  describe('#getPromiseValue', () => {
    it('should return value from a promise',
      (done: DoneFn) => {
      service.getPromiseValue().then(value => {
        expect(value).toBe('promise value');
        done();
      });
    });
  });
});
