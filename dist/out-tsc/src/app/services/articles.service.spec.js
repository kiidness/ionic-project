import { TestBed } from '@angular/core/testing';
import { ArticlesService } from './articles.service';
describe('ArticlesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ArticlesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=articles.service.spec.js.map