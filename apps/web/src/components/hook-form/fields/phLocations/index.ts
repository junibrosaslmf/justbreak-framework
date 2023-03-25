const regions = require("./json/regions.json");
const provinces = require("./json/provinces.json");
const city_mun = require("./json/city-mun.json");
const brgy = require("./json/barangays.json");

export default {
  regions: regions,
  provinces: provinces,
  city_mun: city_mun,
  barangays: brgy,

  // get all provinces in selected region
  getProvincesByRegion: (region_code: any) => {
    return provinces.filter((val: any, i: any) => {
      return val.reg_code == region_code;
    });
  },

  // get all cities and municipalities in selected state
  getCityMunByProvince: (province_code: any) => {
    return city_mun.filter((val: any, i: any) => {
      return val.prov_code == province_code;
    });
  },

  // get all barangays in selected city or municipality
  getBarangayByMun: (mun_code: any) => {
    return brgy.filter((val: any, i: any) => {
      return val.mun_code == mun_code;
    });
  },

  sort: (arr: any, sort = "A") => {
    // A for asc
    // z for desc

    var sorted = arr.slice(0);

    if (sort == "A") {
      sorted.sort(function (a: any, b: any) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else if (sort == "Z") {
      sorted.sort(function (a: any, b: any) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return y < x ? -1 : y > x ? 1 : 0;
      });
    }

    return sorted;
  },
};
