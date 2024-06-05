import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { SweetAlertModel } from '../models/notifications.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor() {}

  public swalNotification({
    title,
    text,
    icon,
    showCancelButton,
    confirmText,
    cancelText,
  }: SweetAlertModel) {
    Swal.fire({
      title,
      text,
      icon: 'success' || icon,
      showCancelButton,
      confirmButtonColor: '#0f172a',
      cancelButtonColor: '#dc2626',
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
    });
  }
}
