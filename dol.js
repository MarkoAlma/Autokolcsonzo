function autokolcsonzes(kolcsonzes){
    let ertek = 0
    if (kolcsonzes.autoTipus != "gazdaságos" && kolcsonzes.autoTipus != "családi" && kolcsonzes.autoTipus != "luxus") {
        return "Hibás autótipus!"
    }
    else if (kolcsonzes.extraBiztositas != true && kolcsonzes.extraBiztositas != false) {
        return "Hibás extrabiztosítási adat!"
    }
    else if (typeof(kolcsonzes.kolcsonzesiIdo) != "number") {
        return "Hibás kölcsönzési idő!"
    }else {
        if (kolcsonzes.autoTipus == "gazdaságos") {
            ertek = 3000
        }else if (kolcsonzes.autoTipus == "családi") {
            ertek = 5000
        }else {
            ertek = 10000
        }
        if (kolcsonzes.extraBiztositas) {
            ertek += 1000
        }
        ertek *= kolcsonzes.kolcsonzesiIdo
        if (kolcsonzes.kolcsonzesiIdo >= 7) {
            ertek *= 0.9
        }
        kolcsonzes.osszesKoltseg = ertek
        return kolcsonzes
    }
}