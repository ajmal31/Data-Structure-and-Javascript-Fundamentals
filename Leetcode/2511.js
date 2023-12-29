var captureForts = function (forts) {

    let enemies = 0
    for (let i = 0; i < forts.length; i++) {
        if (forts[i] === 1) {
            for (let j = 0; j < forts.length; j++) {
                if (forts[j] === -1) {
                    let arr = forts.slice(Math.min(i + 1, j + 1), Math.max(i, j))
                    let count = 0
                    if (!arr.includes(1 || -1)&&arr.includes(0)) {

                        for (let k = 0; k < arr.length; k++) {
                            if (arr[k] === -1 || arr[k] === 1) {
                                count = 0
                                break
                            }
                            if (arr[k] === 0) count++
                        }
                        enemies = Math.max(count, enemies)

                    }

                    
                }
            }
        }
    }
    return enemies

};