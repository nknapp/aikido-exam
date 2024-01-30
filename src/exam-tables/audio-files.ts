// noinspection SpellCheckingInspection

import ai_hanmi_katate_dori from "src/assets/audio/ai-hanmi-katate-dori.mp3";
import chudan_tsuki from "src/assets/audio/chudan-tsuki.mp3";
import gokyo from "src/assets/audio/gokyo.mp3";
import gyuako_hanmi_katate_dori from "src/assets/audio/gyuako-hanmi-katate-dori.mp3";
import hanmi_handachi_waza from "src/assets/audio/hanmi-handachi-waza.mp3";
import ikkyo from "src/assets/audio/ikkyo.mp3";
import irimi_nage from "src/assets/audio/irimi-nage.mp3";
import jo_dori from "src/assets/audio/jo-dori.mp3";
import jo_nage from "src/assets/audio/jo-nage.mp3";
import jodan_tsuki from "src/assets/audio/jodan-tsuki.mp3";
import kata_dori from "src/assets/audio/kata-dori.mp3";
import kata_dori_men_uchi from "src/assets/audio/kata-dori-men-uchi.mp3";
import katate_ryote_dori from "src/assets/audio/katate-ryote-dori.mp3";
import kokyu_hoo from "src/assets/audio/kokyu-hoo.mp3";
import kokyu_nage from "src/assets/audio/kokyu-nage.mp3";
import koshi_nage from "src/assets/audio/koshi-nage.mp3";
import kote_gaeshi from "src/assets/audio/kote-gaeshi.mp3";
import mae_ryo_kata_dori from "src/assets/audio/mae-ryo-kata-dori.mp3";
import muna_dori from "src/assets/audio/muna-dori.mp3";
import nikyo from "src/assets/audio/nikyo.mp3";
import ryote_dori from "src/assets/audio/ryote-dori.mp3";
import sankyo from "src/assets/audio/sankyo.mp3";
import shiho_nage from "src/assets/audio/shiho-nage.mp3";
import shomen_uchi from "src/assets/audio/shomen-uchi.mp3";
import sokumen_irimi_nage from "src/assets/audio/sokumen-irimi-nage.mp3";
import suwari_waza from "src/assets/audio/suwari-waza.mp3";
import tachi_dori from "src/assets/audio/tachi-dori.mp3";
import tachi_waza from "src/assets/audio/tachi-waza.mp3";
import tanto_dori from "src/assets/audio/tanto-dori.mp3";
import tenchi_nage from "src/assets/audio/tenchi-nage.mp3";
import uchi_kaiten_nage from "src/assets/audio/uchi-kaiten-nage.mp3";
import uchi_kaiten_sankyo from "src/assets/audio/uchi-kaiten-sankyo.mp3";
import soto_kaiten_nage from "src/assets/audio/soto-kaiten-nage.mp3";
import ude_kime_nage from "src/assets/audio/ude-kime-nage.mp3";
import ude_garami from "src/assets/audio/ude-garami.mp3";
import ushiro_eri_dori from "src/assets/audio/ushiro-eri-dori.mp3";
import ushiro_katate_dori_kube_shime from "src/assets/audio/ushiro-katate-dori-kube-shime.mp3";
import ushiro_ryo_hiji_dori from "src/assets/audio/ushiro-ryo-hiji-dori.mp3";
import ushiro_ryo_kata_dori from "src/assets/audio/ushiro-ryo-kata-dori.mp3";
import ushiro_ryote_dori from "src/assets/audio/ushiro-ryote-dori.mp3";
import yokomen_uchi from "src/assets/audio/yokomen-uchi.mp3";
import yonkyo from "src/assets/audio/yonkyo.mp3";
import omote from "src/assets/audio/omote.mp3";
import ura from "src/assets/audio/ura.mp3";
import sumi_otoshi from "src/assets/audio/sumi-otoshi.mp3";
import aiki_otoshi from "src/assets/audio/aiki-otoshi.mp3";
import juji_garami from "src/assets/audio/juji-garami.mp3";
import hiji_kime_osae from "src/assets/audio/hiji-kime-osae.mp3";
import shomen_uchi_gyaku_te from "src/assets/audio/shomen-uchi-gyaku-te.mp3";
import shomen_uchi_hon_te from "src/assets/audio/shomen-uchi-hon-te.mp3";
import yokomen_uchi_gyaku_te from "src/assets/audio/yokomen-uchi-gyaku-te.mp3";
import yokomen_uchi_hon_te from "src/assets/audio/yokomen-uchi-hon-te.mp3";
import ai_hanmi_ryote_dori from "src/assets/audio/ai-hanmi-ryote-dori.mp3";

export const executions = {
  "suwari waza": suwari_waza,
  "hanmi handachi waza": hanmi_handachi_waza,
  "tachi waza": tachi_waza,
  "tanto dori": tanto_dori,
  "jo dori": jo_dori,
  "jo nage": jo_nage,
  "tachi dori": tachi_dori,
} as const;

export const attacks = {
  "ai hanmi katate dori": ai_hanmi_katate_dori,
  "gyuako hanmi katate dori": gyuako_hanmi_katate_dori,
  "kata dori": kata_dori,
  "ryote dori": ryote_dori,
  "katate ryote dori": katate_ryote_dori,
  "muna dori": muna_dori,
  "mae ryo kata dori": mae_ryo_kata_dori,
  "shomen uchi": shomen_uchi,
  "yokomen uchi": yokomen_uchi,
  "chudan tsuki": chudan_tsuki,
  "jodan tsuki": jodan_tsuki,
  "kata dori men uchi": kata_dori_men_uchi,
  "ushiro ryote dori": ushiro_ryote_dori,
  "ushiro ryo hiji dori": ushiro_ryo_hiji_dori,
  "ushiro ryo kata dori": ushiro_ryo_kata_dori,
  "ushiro katate dori kubi shime": ushiro_katate_dori_kube_shime,
  "ushiro eri dori": ushiro_eri_dori,
  "shomen uchi gyaku-te": shomen_uchi_gyaku_te,
  "shomen uchi hon-te": shomen_uchi_hon_te,
  "yokomen uchi gyaku-te": yokomen_uchi_gyaku_te,
  "yokomen uchi hon-te": yokomen_uchi_hon_te,
  "ai hanmi ryote dori": ai_hanmi_ryote_dori,
};

export const defences = {
  ikkyo: ikkyo,
  nikyo: nikyo,
  sankyo: sankyo,
  yonkyo: yonkyo,
  gokyo: gokyo,
  "irimi nage": irimi_nage,
  "kokyu nage": kokyu_nage,
  "shiho nage": shiho_nage,
  "ude kime nage": ude_kime_nage,
  "ude garami": ude_garami,
  "sokumen irimi nage": sokumen_irimi_nage,
  "uchi kaiten nage": uchi_kaiten_nage,
  "soto kaiten nage": soto_kaiten_nage,
  "tenchi nage": tenchi_nage,
  "koshi nage": koshi_nage,
  "kote gaeshi": kote_gaeshi,
  "kokyu ho": kokyu_hoo,
  "sumi otoshi": sumi_otoshi,
  "aiki otoshi": aiki_otoshi,
  "juji garami": juji_garami,
  "hiji kimo oase": hiji_kime_osae,
  "uchi kaiten sankyo": uchi_kaiten_sankyo,
};

export const SINGLE_DIRECTION = "single-direction";

export const directions = {
  omote: omote,
  ura: ura,
} as const;

export const audioFiles = {
  ...executions,
  ...attacks,
  ...defences,
  ...directions,
} as const;

export type Execution = keyof typeof executions;
export type Attack = keyof typeof attacks;
export type Defence = keyof typeof defences;
export type Direction = keyof typeof directions | typeof SINGLE_DIRECTION;
export type AudioFile = keyof typeof audioFiles;
