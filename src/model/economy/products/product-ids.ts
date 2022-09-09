export const WOD = "WOD";
export const BRI = "BRI";
export const GRA = "GRA";
export const HEM = "HEM";
export const WOL = "WOL";
export const RAW = "RAW";
export const HON = "HON";
export const SAL = "SAL";
export const GOO = "GOO";
export const MED = "MED";
export const FAB = "FAB";
export const BEE = "BEE";
export const STO = "STO";
export const CLO = "CLO";
export const CHE = "CHE";
export const PIT = "PIT";
export const PEL = "PEL";
export const MET = "MET";
export const WIN = "WIN";

export const IDS_ALL = [
  WOD,
  BRI,
  GRA,
  HEM,
  WOL,
  RAW,
  HON,
  SAL,
  GOO,
  MED,
  FAB,
  BEE,
  STO,
  CLO,
  CHE,
  PIT,
  PEL,
  MET,
  WIN,
] as const;

export const IDS_REV = [...IDS_ALL].reverse();

export type Id = typeof IDS_ALL[number];

export type Total<T> = { [key in Id]: T };

export type Partial<T> = { [key in Id]?: T };

export type Relation<T> = (id: Id) => T;

export const createTotal = <T>(mapper: Relation<T>): Total<T> => ({
  [WOD]: mapper(WOD),
  [BRI]: mapper(BRI),
  [GRA]: mapper(GRA),
  [HEM]: mapper(HEM),
  [WOL]: mapper(WOL),
  [RAW]: mapper(RAW),
  [HON]: mapper(HON),
  [SAL]: mapper(SAL),
  [GOO]: mapper(GOO),
  [MED]: mapper(MED),
  [FAB]: mapper(FAB),
  [BEE]: mapper(BEE),
  [STO]: mapper(STO),
  [CLO]: mapper(CLO),
  [CHE]: mapper(CHE),
  [PIT]: mapper(PIT),
  [PEL]: mapper(PEL),
  [MET]: mapper(MET),
  [WIN]: mapper(WIN),
});

export const createVector = <T>(mapper: Relation<T>): T[] =>
  IDS_ALL.map(mapper);

export type Reducer<T> = (acc: T, id: Id) => T;

export const reduce = <T>(reducer: Reducer<T>, initial: T): T =>
  IDS_ALL.reduce(reducer, initial);

export function isValidId(possibleId: string | undefined): possibleId is Id {
  if (possibleId === undefined) return false;
  return (IDS_ALL as ReadonlyArray<string>).indexOf(possibleId) > -1;
}

export const asValidIdOrElse = (
  possibleId: string | undefined,
  orElseId: Id
): Id => (isValidId(possibleId) ? possibleId : orElseId);

export const rankOf = (id: Id): number => {
  return IDS_ALL.indexOf(id);
};
