
import { transports, format } from "winston";

export function options(scenarioName: String) {
    return {
        transports: [
            new transports.File({
                level: "info",
                filename: `reports/logs/${scenarioName}/log.log`,
                format: format.combine(
                    format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                    format.align(),
                    format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`)

                )
            })
        ]
    }
  
}
