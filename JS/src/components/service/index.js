import { useStoreDispatch, useStoreSelector } from "../../store/index.js";
import { setServiceSelected } from "../../store/states/services/actionCreators.js";
import {
  selectAllServices,
  selectSelectedService,
} from "../../store/states/services/selectors.js";
import { formatDataToHTML } from "../../utils/index.js";

export function SelectService() {
  const allServices = useStoreSelector(selectAllServices);
  const servicesLenth = allServices.length;

  if (!servicesLenth) return "";

  const selectedService = useStoreSelector(selectSelectedService);
  const selectRandomButtonId = "selectRandom";
  const dispatch = useStoreDispatch();

  function selectRandomService() {
    let randomService;
    for (; !randomService; ) {
      const randomIndex = Math.floor(Math.random() * servicesLenth);
      const { [randomIndex]: nextRandomService = {} } = allServices;
      if (nextRandomService.id !== selectedService?.id) {
        randomService = nextRandomService;
      }
    }

    dispatch(setServiceSelected(randomService?.id));
  }

  setTimeout(() => {
    const btn = document.getElementById(selectRandomButtonId);
    btn?.addEventListener("click", selectRandomService);
  }, 0);
  
  return `
      <br>
      <h5 style="color: #8a05ff">Next ACTION is a normal dispatch</h5>
      ${formatDataToHTML({
        title: "RANDOM_SELECTED_SERVICE",
        data: selectedService,
      })}
      <button id="${selectRandomButtonId}">Click to select a random Service</button>
    `;
}
