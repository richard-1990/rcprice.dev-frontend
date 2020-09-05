import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BlogComponent } from './blog.component'
import { BlogService } from './blog.service'
import { MatDialogModule } from '@angular/material/dialog'
import { of } from 'rxjs'

describe('BlogComponent', () => {
  let component: BlogComponent
  let fixture: ComponentFixture<BlogComponent>

  let MockBlogService

  beforeEach(async(() => {
    MockBlogService = jasmine.createSpyObj(['getBlogEntries'])
    MockBlogService.getBlogEntries.and.returnValue(of('some value'))

    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [BlogComponent],
      providers: [
        {
          provide: BlogService,
          useValue: MockBlogService,
        },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
