import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeState } from 'src/app/core/constants/anime';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css'],
})
export class AddAnimeComponent implements OnInit {
  public animeForm!: FormGroup;
  public isUpdate: boolean = false;
  public showEnable: boolean | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const urlRegex =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    this.animeForm = this.formBuilder.group({
      id: '',
      imgUrl: ['', [Validators.required, Validators.pattern(urlRegex)]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      genres: [''],
      state: AnimeState.ACTIVE,
    });
  }

  ngOnInit(): void {
    this.updateFormInputs();
  }

  public cancel() {
    this.router.navigate(['/']);
  }

  public onSubmit() {
    if (this.animeForm.valid !== this.isUpdate) {
      const id = this.setDynamicId();
      this.animeForm.get('id')?.patchValue(id);
      this.animeService.addAnime(this.animeForm.value).subscribe((result) => {
        this.router.navigate(['/']);
      });
    } else {
      this.udpdateAnime();
    }
   
  }

  public setDynamicId() {
    const id =
      this.animeForm.get('title')?.value.toLowerCase().replaceAll(' ', '') +
      Math.floor(Math.random() * 10000);
    return id;
  }

  public updateFormInputs() {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        this.isUpdate = true;
        this.animeService
          .getAnime(id)
          .subscribe((anime) =>
            anime && anime?.id === id ? this.animeForm.patchValue(anime) : null
          );
        this.showEnableInput();
      }
    });
  }
  public udpdateAnime() {
    if (this.animeForm.valid) {
      this.animeService
        .updateAnime(this.animeForm.value)
        .subscribe((result) => {
          this.router.navigate(['/']);
        });
    }
  }

  public showEnableInput() {
    if (!this.animeForm.get('state')?.value) {
      this.showEnable = false;
    }
  }

  public inputValidation(input: string) {
    if (
      this.animeForm.get(input)?.invalid &&
      this.animeForm.get(input)?.touched
    ) {
      return true;
    }
    return false;
  }
}
