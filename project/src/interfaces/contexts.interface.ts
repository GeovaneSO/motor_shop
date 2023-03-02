import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  AnnouncementRequest,
  AnnouncementResponse,
  UpdateAnnouncementRequest,
} from "./announcement.interface";
import { UserResponse, UserSessionRequest } from "./user.interface";

export interface Props {
  children: ReactNode;
}

export interface AnnouncementProviderData {
  createAnnouncement: (data: AnnouncementRequest) => void;
  setAnnouncement: Function;
  announcement: AnnouncementResponse;
  setIsOpenModalCreateAnnouncement: Function;
  isOpenModalCreateAnnouncement: boolean;
  setAnnouncementType: Function;
  announcementType: string;
  setVehicleType: Function;
  vehicleType: string;
  setInputs: Function;
  setIsAnnouncementPublished: Function;
  isAnnouncementPublished: boolean;
  isOpenModalUpdateAnnouncement: boolean;
  setIsOpenModalUpdateAnnouncement: Function;
  inputs: JSX.Element;
  announcementsCars: AnnouncementResponse[];
  announcementsMotorcycle: AnnouncementResponse[];
  detailAnoucements: AnnouncementResponse;
  setDetailAnoucements: Function;
  getAllAnnouncementByAdvertiser: Function;
  allAnnouncementByAdvertiser: AnnouncementResponse[];
  updateAnnouncement: (data: UpdateAnnouncementRequest) => void;
  deleteAnnouncement: (announcementId: string) => void;
  setIsOpenModalDeleteAnnouncement: Function;
  isOpenModalDeleteAnnouncement: boolean;
  reload: boolean
  allAnnouncements: AnnouncementResponse[]

 setReload: Function;
}

export interface IUserContext {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  user: UserResponse;
  setUser: Dispatch<SetStateAction<UserResponse>>;
  getUser: (id: string) => void;
  isLoading: boolean;
  setIsLoading: Function;
  reload: boolean;
  setReload: Function;
  isDropdown: boolean;
  setIsDropDown: Function;

}


export interface SessionProviderData {
  createSession: (data: UserSessionRequest) => void;
  logout: () => void;
};
