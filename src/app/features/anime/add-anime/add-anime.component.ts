import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeState } from 'src/app/core/constants/anime';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css'],
})
export class AddAnimeComponent implements OnInit {
  public animeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private animeService: AnimeService,
    private router: Router
  ) {
    this.animeForm = this.formBuilder.group({
      id: [0],
      imgUrl: ['', Validators.required],
      title: ['', Validators.required],
      genres: [''],
      state: AnimeState.ENABLE,
    });
  }

  ngOnInit(): void {}

  public cancel() {
    this.router.navigate(['/']);
  }

  public onSubmit() {
    if (this.animeForm.valid) {
      const id = this.setDynamicId();
      this.animeForm.get('id')?.patchValue(id);
      this.animeService.addAnime(this.animeForm.value).subscribe((result) => {
        this.router.navigate(['/']);
      });
    }
  }

  public setDynamicId() {
    const id =
      this.animeForm.get('title')?.value.toLowerCase().replaceAll(' ', '') +
      Math.floor(Math.random() * 10000);
    return id;
  }
}
