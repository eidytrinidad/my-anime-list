import { SweetAlertIcon } from "sweetalert2";

export interface SweetAlertModel {
  title: string;
  text: string;
  icon?: SweetAlertIcon | undefined;
  showCancelButton?: boolean;
  confirmText?: string;
  cancelText?: string;
}
