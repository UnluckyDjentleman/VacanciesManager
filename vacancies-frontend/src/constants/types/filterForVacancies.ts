import Vacancy from "./vacancy";

interface FilterForVacancies extends Partial<Omit<Vacancy, "id" | "note">> {}

export default FilterForVacancies;
