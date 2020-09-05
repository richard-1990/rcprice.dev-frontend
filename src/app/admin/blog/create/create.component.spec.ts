import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BlogCreateComponent } from './create.component'
import { MatDialogRef } from '@angular/material/dialog'
import { BlogService } from '../blog.service'
import { of } from 'rxjs'
import { RouterTestingModule } from '@angular/router/testing'

describe('BlogCreateComponent', () => {
  let component: BlogCreateComponent
  let fixture: ComponentFixture<BlogCreateComponent>
  let MockBlogService

  beforeEach(async(() => {
    MockBlogService = jasmine.createSpyObj(['getSingleBlog'])
    MockBlogService.getSingleBlog.and.returnValue(
      of({
        title: 'test',
      })
    )

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BlogCreateComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: BlogService, useValue: MockBlogService },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
