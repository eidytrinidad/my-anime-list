import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private animeService: AnimeService
  ) {
    this.animeForm = this.formBuilder.group({
      id: [0],
      imgUrl: ['', Validators.required],
      title: ['', Validators.required],
      state: [AnimeState.ENABLE, Validators.required],
    });
  }

  ngOnInit(): void {}
}
