import { useReducer } from "react";
import { places, Loc } from "../data/locs";
import { locationReducer } from "../reducers/itineraryReducer";
import { ListItem } from "../components/LocationListItem";
import AddLocation from "../components/AddLocation";

let nextId: number = 3;

export default function TaskApp() {
  const [locations, dispatch] = useReducer(locationReducer, places);
  const totalLocs = locations.length;
  const visitedLocs = locations.filter((l) => l.visited === true).length;

  function handleAddLoc(locationName: string) {
    dispatch({
      type: "added_item",
      id: nextId++,
      locationName: locationName,
    });
  }

  function handleEditLoc(location: Loc) {
    dispatch({
      type: "edited_item",
      location: location,
    });
  }

  function handleRemoveLoc(id: number) {
    dispatch({
      type: "deleted_item",
      id: id,
    });
  }

  return (
    <div className="grid h-screen place-items-center">
      <div className="rounded bg-gray-100 shadow-sm p-6 max-w-sm">
        <h1 className="text-xl font-bold mb-2">Night City Itinerary</h1>
        <AddLocation onClick={handleAddLoc} />
        <div className="space-y-2 mt-3">
          {locations.map((loc: Loc) => (
            <ListItem
              key={loc.id}
              location={loc}
              onDelete={handleRemoveLoc}
              onEdit={handleEditLoc}
            />
          ))}
        </div>
        <div className="mt-3 space-y-2">
          <hr className="border-sm border-slate-300" />
          <p className="font-semibold text-md text-slate-700">
            Visited {visitedLocs} of {totalLocs} locations
          </p>
        </div>
      </div>
    </div>
  );
}
