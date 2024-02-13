var information = document.getElementById("information");
var infoContainer = document.getElementById("infoContainer");
var infoContainer1 = document.getElementById("infoContainer1");
var infoContainer2 = document.getElementById("infoContainer2");
var infoContainer3 = document.getElementById("infoContainer3");
var infoContainer4 = document.getElementById("infoContainer4");
var infoContainer5 = document.getElementById("infoContainer5");
var infoContainer6 = document.getElementById("infoContainer6");
var infoContainer7 = document.getElementById("infoContainer7");
var infoContainer8 = document.getElementById("infoContainer8");
var infoContainer9 = document.getElementById("infoContainer9");
var infoContainer10 = document.getElementById("infoContainer10");
var infoContainer11 = document.getElementById("infoContainer11");
var infoContainer12 = document.getElementById("infoContainer12");
var infoContainer13 = document.getElementById("infoContainer13");
var infoContainer14 = document.getElementById("infoContainer14");
var infoContainer15 = document.getElementById("infoContainer15");
var infoContainer16 = document.getElementById("infoContainer16");
var infoContainer17 = document.getElementById("infoContainer17");
var infoContainer18 = document.getElementById("infoContainer18");
var infoContainer19 = document.getElementById("infoContainer19");
var exit1 = document.getElementById("exit1");
var exit2 = document.getElementById("exit2");
var exit3 = document.getElementById("exit3");
var exit4 = document.getElementById("exit4");
var exit5 = document.getElementById("exit5");
var exit6 = document.getElementById("exit6");
var exit7 = document.getElementById("exit7");
var exit8 = document.getElementById("exit8");
var exit9 = document.getElementById("exit9");
var exit10 = document.getElementById("exit10");
var exit11 = document.getElementById("exit11");
var exit12 = document.getElementById("exit12");
var exit13 = document.getElementById("exit13");
var exit14 = document.getElementById("exit14");
var exit15 = document.getElementById("exit15");
var exit16 = document.getElementById("exit16");
var exit17 = document.getElementById("exit17");
var exit18 = document.getElementById("exit18");
var exit19 = document.getElementById("exit19");
var exit20 = document.getElementById("exit20");

if (information && infoContainer && infoContainer1) {
    information.addEventListener("click", function (e) {
        infoContainer.style.display = "flex";
    });

    if (exit1 && infoContainer) {
        exit1.addEventListener("click", function (e) {
            infoContainer.style.display = "none";
          }  );
    }
    if (exit2 && infoContainer1) {
        exit2.addEventListener("click", function (e) {
            infoContainer1.style.display = "none";
        });
    }
        if (exit3 && infoContainer2) {
            exit3.addEventListener("click", function (e) {
                infoContainer2.style.display = "none";
            });
        }
        if (exit4 && infoContainer3) {
            exit4.addEventListener("click", function (e) {
                infoContainer3.style.display = "none";
            });
        }
        if (exit5 && infoContainer4) {
            exit5.addEventListener("click", function (e) {
                infoContainer4.style.display = "none";
            });
        }
        if (exit6 && infoContainer5) {
            exit6.addEventListener("click", function (e) {
                infoContainer5.style.display = "none";
            });
        }
        if (exit7 && infoContainer6) {
            exit7.addEventListener("click", function (e) {
                infoContainer6.style.display = "none";
            });
        }
        if (exit8 && infoContainer7) {
            exit8.addEventListener("click", function (e) {
                infoContainer7.style.display = "none";
            });
        }
        if (exit9 && infoContainer8) {
            exit9.addEventListener("click", function (e) {
                infoContainer8.style.display = "none";
            });
        }
        if (exit10 && infoContainer9) {
            exit10.addEventListener("click", function (e) {
                infoContainer9.style.display = "none";
            });
        }
        if (exit11 && infoContainer10) {
            exit11.addEventListener("click", function (e) {
                infoContainer10.style.display = "none";
            });
        }
        if (exit12 && infoContainer11) {
            exit12.addEventListener("click", function (e) {
                infoContainer11.style.display = "none";
            });
        }
        if (exit13 && infoContainer12) {
            exit13.addEventListener("click", function (e) {
                infoContainer12.style.display = "none";
            });
        }
        if (exit14 && infoContainer13) {
            exit14.addEventListener("click", function (e) {
                infoContainer13.style.display = "none";
            });
        }
        if (exit15 && infoContainer14) {
            exit15.addEventListener("click", function (e) {
                infoContainer14.style.display = "none";
            });
        }
        if (exit16 && infoContainer15) {
            exit16.addEventListener("click", function (e) {
                infoContainer15.style.display = "none";
            });
        }
        if (exit17 && infoContainer16) {
            exit17.addEventListener("click", function (e) {
                infoContainer16.style.display = "none";
            });
        }
        if (exit18 && infoContainer17) {
            exit18.addEventListener("click", function (e) {
                infoContainer17.style.display = "none";
            });
        }
        if (exit19 && infoContainer18) {
            exit19.addEventListener("click", function (e) {
                infoContainer18.style.display = "none";
            });
        }
        if (exit20 && infoContainer19) {
            exit20.addEventListener("click", function (e) {
                infoContainer19.style.display = "none";
            });
        }
    // Handle the click on "Popup Next" inside the first popup
    var popupNext = document.querySelector(".popupnext");
    if (popupNext) {
        popupNext.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer.style.display = "none";

            // Show the second variant popup
            infoContainer1.style.display = "flex";
        });
    }
    var popupBack = document.querySelector(".popupback");
    if (popupBack) {
        popupBack.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer1.style.display = "none";

            // Show the second variant popup
            infoContainer.style.display = "flex";
        });
    }
    var popupNext1 = document.querySelector(".popupnext1");
    if (popupNext1) {
        popupNext1.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer1.style.display = "none";

            // Show the second variant popup
            infoContainer2.style.display = "flex";
        });
    }
    var popupBack1 = document.querySelector(".popupback1");
    if (popupBack1) {
        popupBack1.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer2.style.display = "none";

            // Show the second variant popup
            infoContainer1.style.display = "flex";
        });
    }
    var popupNext2 = document.querySelector(".popupnext2");
    if (popupNext2) {
        popupNext2.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer2.style.display = "none";

            // Show the second variant popup
            infoContainer3.style.display = "flex";
        });
    }
    var popupBack2 = document.querySelector(".popupback2");
    if (popupBack2) {
        popupBack2.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer3.style.display = "none";

            // Show the second variant popup
            infoContainer2.style.display = "flex";
        });
    }
    var popupNext3 = document.querySelector(".popupnext3");
    if (popupNext3) {
        popupNext3.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer3.style.display = "none";

            // Show the second variant popup
            infoContainer4.style.display = "flex";
        });
    }
    var popupBack3 = document.querySelector(".popupback3");
    if (popupBack3) {
        popupBack3.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer4.style.display = "none";

            // Show the second variant popup
            infoContainer3.style.display = "flex";
        });
    }
    var popupNext4 = document.querySelector(".popupnext4");
    if (popupNext4) {
        popupNext4.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer4.style.display = "none";

            // Show the second variant popup
            infoContainer5.style.display = "flex";
        });
    }
    var popupBack4 = document.querySelector(".popupback4");
    if (popupBack4) {
        popupBack4.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer5.style.display = "none";

            // Show the second variant popup
            infoContainer4.style.display = "flex";
        });
    }
    var popupNext5 = document.querySelector(".popupnext5");
    if (popupNext5) {
        popupNext5.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer5.style.display = "none";

            // Show the second variant popup
            infoContainer6.style.display = "flex";
        });
    }
    var popupBack5 = document.querySelector(".popupback5");
    if (popupBack5) {
        popupBack5.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer6.style.display = "none";

            // Show the second variant popup
            infoContainer5.style.display = "flex";
        });
    }
    var popupNext6 = document.querySelector(".popupnext6");
    if (popupNext6) {
        popupNext6.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer6.style.display = "none";

            // Show the second variant popup
            infoContainer7.style.display = "flex";
        });
    }
    var popupBack6 = document.querySelector(".popupback6");
    if (popupBack6) {
        popupBack6.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer7.style.display = "none";

            // Show the second variant popup
            infoContainer6.style.display = "flex";
        });
    }
    var popupNext7 = document.querySelector(".popupnext7");
    if (popupNext7) {
        popupNext7.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer7.style.display = "none";

            // Show the second variant popup
            infoContainer8.style.display = "flex";
        });
    }
    var popupBack7 = document.querySelector(".popupback7");
    if (popupBack7) {
        popupBack7.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer8.style.display = "none";

            // Show the second variant popup
            infoContainer7.style.display = "flex";
        });
    }
    var popupNext8 = document.querySelector(".popupnext8");
    if (popupNext8) {
        popupNext8.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer8.style.display = "none";

            // Show the second variant popup
            infoContainer9.style.display = "flex";
        });
    }
    var popupBack8 = document.querySelector(".popupback8");
    if (popupBack8) {
        popupBack8.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer9.style.display = "none";

            // Show the second variant popup
            infoContainer8.style.display = "flex";
        });
    }
    var popupNext9 = document.querySelector(".popupnext9");
    if (popupNext9) {
        popupNext9.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer9.style.display = "none";

            // Show the second variant popup
            infoContainer10.style.display = "flex";
        });
    }
    var popupBack9 = document.querySelector(".popupback9");
    if (popupBack9) {
        popupBack9.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer10.style.display = "none";

            // Show the second variant popup
            infoContainer9.style.display = "flex";
        });
    }
    var popupNext10 = document.querySelector(".popupnext10");
    if (popupNext10) {
        popupNext10.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer10.style.display = "none";

            // Show the second variant popup
            infoContainer11.style.display = "flex";
        });
    }
    var popupBack10 = document.querySelector(".popupback10");
    if (popupBack10) {
        popupBack10.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer11.style.display = "none";

            // Show the second variant popup
            infoContainer10.style.display = "flex";
        });
    }
    var popupNext11 = document.querySelector(".popupnext11");
    if (popupNext11) {
        popupNext11.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer11.style.display = "none";

            // Show the second variant popup
            infoContainer12.style.display = "flex";
        });
    }
    var popupBack11 = document.querySelector(".popupback11");
    if (popupBack11) {
        popupBack11.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer12.style.display = "none";

            // Show the second variant popup
            infoContainer11.style.display = "flex";
        });
    }
    var popupNext12 = document.querySelector(".popupnext12");
    if (popupNext12) {
        popupNext12.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer12.style.display = "none";

            // Show the second variant popup
            infoContainer13.style.display = "flex";
        });
    }
    var popupBack12 = document.querySelector(".popupback12");
    if (popupBack12) {
        popupBack12.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer13.style.display = "none";

            // Show the second variant popup
            infoContainer12.style.display = "flex";
        });
    }
    var popupNext13 = document.querySelector(".popupnext13");
    if (popupNext13) {
        popupNext13.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer13.style.display = "none";

            // Show the second variant popup
            infoContainer14.style.display = "flex";
        });
    }
    var popupBack13 = document.querySelector(".popupback13");
    if (popupBack13) {
        popupBack13.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer14.style.display = "none";

            // Show the second variant popup
            infoContainer13.style.display = "flex";
        });
    }
    var popupNext14 = document.querySelector(".popupnext14");
    if (popupNext14) {
        popupNext14.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer14.style.display = "none";

            // Show the second variant popup
            infoContainer15.style.display = "flex";
        });
    }
    var popupBack14 = document.querySelector(".popupback14");
    if (popupBack14) {
        popupBack14.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer15.style.display = "none";

            // Show the second variant popup
            infoContainer14.style.display = "flex";
        });
    }
    var popupNext15 = document.querySelector(".popupnext15");
    if (popupNext15) {
        popupNext15.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer15.style.display = "none";

            // Show the second variant popup
            infoContainer16.style.display = "flex";
        });
    }
    var popupBack15 = document.querySelector(".popupback15");
    if (popupBack15) {
        popupBack15.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer16.style.display = "none";

            // Show the second variant popup
            infoContainer15.style.display = "flex";
        });
    }
    var popupNext16 = document.querySelector(".popupnext16");
    if (popupNext16) {
        popupNext16.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer16.style.display = "none";

            // Show the second variant popup
            infoContainer17.style.display = "flex";
        });
    }
    var popupBack16 = document.querySelector(".popupback16");
    if (popupBack16) {
        popupBack16.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer17.style.display = "none";

            // Show the second variant popup
            infoContainer16.style.display = "flex";
        });
    }
    var popupNext17 = document.querySelector(".popupnext17");
    if (popupNext17) {
        popupNext17.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer17.style.display = "none";

            // Show the second variant popup
            infoContainer18.style.display = "flex";
        });
    }
    var popupBack17 = document.querySelector(".popupback17");
    if (popupBack17) {
        popupBack17.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer18.style.display = "none";

            // Show the second variant popup
            infoContainer17.style.display = "flex";
        });
    }
    var popupNext18 = document.querySelector(".popupnext18");
    if (popupNext18) {
        popupNext18.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer18.style.display = "none";

            // Show the second variant popup
            infoContainer19.style.display = "flex";
        });
    }
    var popupBack18 = document.querySelector(".popupback18");
    if (popupBack18) {
        popupBack18.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer19.style.display = "none";

            // Show the second variant popup
            infoContainer18.style.display = "flex";
        });
    }
    var popupNext19 = document.querySelector(".popupnext19");
    if (popupNext19) {
        popupNext19.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer19.style.display = "none";
        });
    }

    // Handle the click outside the second popup to close it
    infoContainer1.addEventListener("click", function (e) {
        if (e.target === infoContainer1) {
            infoContainer1.style.display = "none";
        }
    });
    infoContainer.addEventListener("click", function (e) {
        if (e.target === infoContainer) {
            infoContainer.style.display = "none";
        }
    });
    
    infoContainer2.addEventListener("click", function (e) {
        if (e.target === infoContainer2) {
            infoContainer2.style.display = "none";
        }
    });
    infoContainer3.addEventListener("click", function (e) {
        if (e.target === infoContainer3) {
            infoContainer3.style.display = "none";
        }
    });
    infoContainer4.addEventListener("click", function (e) {
        if (e.target === infoContainer4) {
            infoContainer4.style.display = "none";
        }
    });
    infoContainer5.addEventListener("click", function (e) {
        if (e.target === infoContainer5) {
            infoContainer5.style.display = "none";
        }
    });
    infoContainer6.addEventListener("click", function (e) {
        if (e.target === infoContainer6) {
            infoContainer6.style.display = "none";
        }
    });
    infoContainer7.addEventListener("click", function (e) {
        if (e.target === infoContainer7) {
            infoContainer7.style.display = "none";
        }
    });
    infoContainer8.addEventListener("click", function (e) {
        if (e.target === infoContainer8) {
            infoContainer8.style.display = "none";
        }
    });
    infoContainer9.addEventListener("click", function (e) {
        if (e.target === infoContainer9) {
            infoContainer9.style.display = "none";
        }
    });
    infoContainer10.addEventListener("click", function (e) {
        if (e.target === infoContainer10) {
            infoContainer10.style.display = "none";
        }
    });
    infoContainer11.addEventListener("click", function (e) {
        if (e.target === infoContainer11) {
            infoContainer11.style.display = "none";
        }
    });
    infoContainer12.addEventListener("click", function (e) {
        if (e.target === infoContainer12) {
            infoContainer12.style.display = "none";
        }
    });
    infoContainer13.addEventListener("click", function (e) {
        if (e.target === infoContainer13) {
            infoContainer13.style.display = "none";
        }
    });
    infoContainer14.addEventListener("click", function (e) {
        if (e.target === infoContainer14) {
            infoContainer14.style.display = "none";
        }
    });
    infoContainer15.addEventListener("click", function (e) {
        if (e.target === infoContainer15) {
            infoContainer15.style.display = "none";
        }
    });
    infoContainer16.addEventListener("click", function (e) {
        if (e.target === infoContainer16) {
            infoContainer16.style.display = "none";
        }
    });
    infoContainer17.addEventListener("click", function (e) {
        if (e.target === infoContainer17) {
            infoContainer17.style.display = "none";
        }
    });
    infoContainer18.addEventListener("click", function (e) {
        if (e.target === infoContainer18) {
            infoContainer18.style.display = "none";
        }
    });
    infoContainer19.addEventListener("click", function (e) {
        if (e.target === infoContainer19) {
            infoContainer19.style.display = "none";
        }
    });
}
