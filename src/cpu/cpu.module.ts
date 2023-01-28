import { Module } from '@nestjs/common';
import { PowerModule } from './../power/power.module';
import { CpuService } from './cpu.service';

@Module({
  providers: [CpuService],
  imports: [PowerModule],
})
export class CpuModule {}
